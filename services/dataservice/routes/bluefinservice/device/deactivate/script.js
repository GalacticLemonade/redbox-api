export const post = async (req, res) => {
    if (req.method !== "POST") return res.status(405)

    return res.json({
        Success: true,
        Errors: [],
        StatusCode: 200
    })
}