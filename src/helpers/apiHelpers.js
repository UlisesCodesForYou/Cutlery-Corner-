export const fetchHomepage = async () => {
    const response = await fetch('/api/homepage')
    const data = await response.json()
   return data
}