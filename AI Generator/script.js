const api = "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";
const Ein = document.getElementById('Ein')
const Bild = document.querySelector('.Bild')

const bildbekommen= async () => {
    // eine Anfrage senden 
    const methods = {
        method : "POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":Ein.value,
                "n":3,
                "size":"256X256"
            }
        )

    }
    const res = await fetch( "https://api.openai.com/v1/images/generations" , methods )
    const data = await res.json()
    console.log(data)
}
