import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://gateway.marvel.com:443/v1/public/comics?apikey=06429c24807d8e4edcfd03ade9caa5fc",
    (req, res, ctx) => {
      console.log("MOCK");
      return res(
        ctx.json({
          code: 200,
          status: "ok",
          data: {
            results: [
              {
                id: 1111,
                title: "test comic",
                issueNumber: "1",
                description: "On the first comic of all time",
                dates: [
                  {
                    type: "onsaleDate",
                    date: "2099-10-30T00:00:00-0500",
                  },
                  {
                    type: "focDate",
                    date: "2019-10-07T00:00:00-0400",
                  },
                ],
                prices: [
                  {
                    type: "printPrice",
                    price: 2.5,
                  },
                ],
                images: [
                  {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75",
                    extension: "jpg",
                  },
                ],
                creators: {
                  available: 2,
                  items: [
                    {
                      name: "Juan D",
                    },
                    {
                      name: "Will Smith",
                    },
                  ],
                },
              },
            ],
          },
        })
      );
    }
  ),
];
