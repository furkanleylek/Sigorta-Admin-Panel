export async function fetchTrafikDatas() {
    try {
        const response = await fetch('/api/trafik', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Alınan veri:', data);
        } else {
            console.error('GET isteği başarısız.');
        }
    } catch (error) {
        console.error('Bir hata oluştu:', error);
    }
}