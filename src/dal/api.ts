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

export const getTrack = (trackId: string | null) => {
    const promise: Promise<GetTrackDetailOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
            headers: {
                //'api-key': "962f3872-5d21-45ca-ad64-b5a84f6f1380"
            }
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
            headers: {
                //'api-key': "962f3872-5d21-45ca-ad64-b5a84f6f1380"
            }
        }).then(response => response.json())        
    
    return promise
}