async function fetchCookies() {
    try {
        const response = await fetch('https://lk.a-mobile.biz', {
            method: 'GET',
            credentials: 'include'
        });

        if (response.ok) {
            const cookies = document.cookie;
            console.log('Cookies:', cookies);
        } else {
            console.error('Failed to fetch:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchCookies();
// Устарел