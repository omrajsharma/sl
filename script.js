// DATABASE
const mapper = {
    'omraj': 'https://omrajsharma.github.io/',
    'lb-04': 'https://www.notion.so/omrajsharma/LB-Nov-MERN-3d2b1c5f7d394a43a0ab0e023e7ae7c2?pvs=4'
}

const urlParams = new URLSearchParams(window.location.search);          // ?q=omraj -> {q:'omraj'}
const query = urlParams.get('q')                                        // omraj

if (mapper[query]) {
    window.location.href = mapper[query]
}