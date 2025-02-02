export const get = async (req, res) => {
    if (req.method !== "GET") return res.status(405)

    return res.json({ hello: "world" })
}