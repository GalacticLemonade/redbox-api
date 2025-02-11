import { v4 } from 'uuid';

export const get = async (req, res) => {
    if (req.method !== "GET") return res.status(405);

    if (!req.query.kioskid) {
        res.json({
            MessageId: v4(),
            Errors: [{
                Code: "400",
                Message: "Missing kioskid query"
            }],
            Success: false
        })

        return;
    }

    //i think ops market is either just the banner or the hub? not sure
    //very obviously has to do with kioskid

    return res.json({
        Success: true,
        MessageId: v4(),
        Errors: [],
        OpsMarket: "",
        KaseyaServer: ""
    })
}