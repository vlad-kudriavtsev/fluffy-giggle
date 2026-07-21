export type TrackDetailsResource = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    }
}

export type GetTrackDetailOutput = {
    data: TrackDetailsResource
}

const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY

    if(!apiKey) return undefined

    return {
        'api-key': apiKey
    }
}

export const getTrack = (trackId: string | null) => {
    const promise: Promise<GetTrackDetailOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
            headers: prepareHeaders()
        }).then(response => response.json())

    return promise
}

type AttachmentsDto = {
    url: string
}

type TrackListItemResourceAttributes = {
    title: string
    attachments: Array<AttachmentsDto>
}

export type TrackListItemResource = {
    id: string
    attributes: TrackListItemResourceAttributes
}

export type GetTrackListOutput = {
    data: Array<TrackListItemResource>
}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: prepareHeaders()
        }).then(response => response.json())        
    
    return promise
}