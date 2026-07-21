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


export const getTrack = () => {
  const promise = Promise.resolve({
    data: {
      id: "88133ec1-f82d-4fbb-b53b-5138b6fc7b90",
      type: "tracks",
      attributes: {
        title: "gangsta react",
        lyrics: "u are the winner, u love react, u'll get the offer, it's fact",
        user: {
          id: "19",
          name: "dimych",
        },
        releaseDate: "2025-09-05T13:00:15.155Z",
        addedAt: "2025-08-13T19:15:17.182Z",
        updatedAt: "2025-10-10T07:30:56.145Z",
        duration: 0,
        attachments: [
          {
            id: "b217ec35-9021-4318-b0ca-7b31df1958a6",
            addedAt: "2025-08-13T19:15:15.487Z",
            updatedAt: "2025-08-13T19:15:15.487Z",
            version: 1,
            url: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/0ae77ecd-f271-4e4c-881c-74e4bdfb4046_file4.mp3",
            contentType: "audio/mpeg",
            originalName: "file4.mp3",
            fileSize: 16800,
          },
        ],
        images: {
          main: [
            {
              type: "original",
              width: 200,
              height: 200,
              fileSize: 14040,
              url: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/e46c0be9-f36e-4131-abbc-0e6512985550_cover.png",
            },
            {
              type: "medium",
              width: 156,
              height: 156,
              fileSize: 5615,
              url: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/f9340e41-b46e-4db2-a504-b37383e9c0bd_image.png",
            },
            {
              type: "thumbnail",
              width: 48,
              height: 48,
              fileSize: 945,
              url: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/b3bd1da4-7b4c-4fa9-a959-0915c3c4abf4_image.png",
            },
          ],
        },
        tags: [],
        artists: [],
        likesCount: 3,
        dislikesCount: 2,
        currentUserReaction: 0,
        publishedAt: "2025-08-13T19:16:27.070Z",
        isPublished: true,
      },
    },
  })
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

//...
 
export const getTracks = () => {
  const promise = Promise.resolve({
     data: [{
      id: "8c1c8624-b409-43cd-9ac3-10b15576feb9ss",
      type: "tracks",
      attributes: {
        title: "banana6boom - Frontend Жив_part-2",
        user: {
          id: "26",
          name: "Svyat-_b25"
        },
        addedAt: "2026-02-26T15:10:09.493Z",
        attachments: [
          {
            id: "33289d06-4879-480b-8b8e-7d19f648d4a5",
            addedAt: "2026-02-26T15:09:53.933Z",
            updatedAt: "2026-02-26T15:09:53.933Z",
            version: 1,
            url: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/80ea0459-8537-4d70-914c-ea5ac112cc04_compress (1).mp3",
            contentType: "audio/mpeg",
            originalName: "compress (1).mp3",
            "fileSize": 886125
          }
        ]
    }
    },
    {
      id: "8c1c8624-b409-43cd-9ac3-10b15576feb9",
      type: "tracks",
      attributes: {
        title: "banana6boom - Frontend Жив_part-2",
        user: {
          id: "26",
          name: "Svyat-_b25"
        },
        addedAt: "2026-02-26T15:10:09.493Z",
        attachments: [
          {
            id: "33289d06-4879-480b-8b8e-7d19f648d4a5",
            addedAt: "2026-02-26T15:09:53.933Z",
            updatedAt: "2026-02-26T15:09:53.933Z",
            version: 1,
            url: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/80ea0459-8537-4d70-914c-ea5ac112cc04_compress (1).mp3",
            contentType: "audio/mpeg",
            originalName: "compress (1).mp3",
            "fileSize": 886125
          }
        ]
    }
    }]
})
  return promise
}
 
//...

