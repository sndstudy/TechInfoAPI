import * as Express from "express";

const app: any = Express();

app.get("/", (req: Express.Request, res: Express.Response) => {
        res.send("Hello World!");
    },
);

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
