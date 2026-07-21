import { TrackItem } from "./TrackItem";
import { useTracks } from "../bll/useTracks";
import styles from './TrackList.module.css'

type Props = {
    selectedTrackId: string | null
    onTrackSelect: (id: string | null) => void
}

export function TrackList({ selectedTrackId, onTrackSelect }: Props) {
    const { tracks } = useTracks()

    const handleClick = (trackId: string) => {
        onTrackSelect?.(trackId)
    }

    const handleResetClick = () => {
        onTrackSelect?.(null)
    }

    if (tracks === null) {
        return <>
            <span>Loading...</span>
        </>
    }

    if (tracks.length === 0) {
        return <>
            <span>No tracks</span>
        </>
    }

    return (
        <div>
            <button onClick={handleResetClick}>reset</button>
            <hr />
            <ul className={styles.tracks}>
                {
                    tracks.map((track) => {
                        return (
                            <TrackItem
                                key={track.id}
                                track={track}
                                isSelected={selectedTrackId === track.id}
                                onSelect={handleClick}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}   