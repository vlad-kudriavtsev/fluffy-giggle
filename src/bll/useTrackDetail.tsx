import { useEffect, useState } from "react"
import { getTrack, type TrackDetailsResource } from "../dal/api"

export function useTrackDetail(trackId: string | null) {
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        if (trackId === null) {
            setSelectedTrack(null)
            return
        }
        getTrack(trackId).then(json => setSelectedTrack(json.data))
    }, [trackId])

    return {
        selectedTrack
    }
}
