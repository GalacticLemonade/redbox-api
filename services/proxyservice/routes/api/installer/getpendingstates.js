import { v4 } from 'uuid';

export const get = async (req, res) => {
    if (req.method !== "GET") return res.status(405)

    return res.json({
        MessageId: v4(),
        Errors: [],
        Success: true,
        States: [{
            //db call
        }]
    })
}