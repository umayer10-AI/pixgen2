export const getCarts = async () => {
    const res = await fetch(`https://pixgen2.vercel.app/data.json`)
    return res.json()
}