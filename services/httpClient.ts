export async function get(url: string){
    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.error(error);
    }
}