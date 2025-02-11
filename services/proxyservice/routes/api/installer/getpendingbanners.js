import { v4 } from 'uuid';

export const get = async (req, res) => {
    if (req.method !== "GET") return res.status(405)

    if (!req.query.stateid) {
        res.json({
            MessageId: v4(),
            Errors: [{
                Code: "400",
                Message: "Missing stateid query"
            }],
            Success: false
        })

        return;
    }

    return res.json({
        Success: true,
        MessageId: v4(),
        Errors: [],
        Banners: [{
            //db call
        }]
    })
}