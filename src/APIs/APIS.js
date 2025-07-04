export async function fetchAPI1() {
    return fetch(`https://newsapi.org/v2/everything?q=tesla&from=2025-06-04&sortBy=publishedAt&apiKey=c115346a3ebb416587f546da914a0725`)
        .then(res => res.json())
        .then(res => res.articles);
}

export async function fetchAPI2() {
    return fetch(`https://newsapi.org/v2/everything?q=apple&from=2025-07-01&to=2025-07-03&sortBy=popularity&apiKey=c115346a3ebb416587f546da914a0725`)
        .then(res => res.json())
        .then(res => res.articles);
}

export async function fetchAPI3() {
    return fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c115346a3ebb416587f546da914a0725`)
        .then(res => res.json())
        .then(res => res.articles);
}

export async function fetchAPI4() {
    return fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c115346a3ebb416587f546da914a0725`)
        .then(res => res.json())
        .then(res => res.articles);
}
