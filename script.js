// DATABASE
const mapper = {
    'omraj': 'https://omrajsharma.github.io/',
    'lb-04': 'https://www.notion.so/omrajsharma/JS-7aff21c580ee42598cce61a2f0476349?pvs=4'
}

const urlParams = new URLSearchParams(window.location.search);          // ?q=omraj -> {q:'omraj'}
const query = urlParams.get('q')                                        // omraj

if (mapper[query]) {
    window.location.href = mapper[query]
}