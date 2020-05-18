export const RenderResults = (results) => {
    genericBox(results);
}

const genericBox = (results) => {
    var index = 0

    results.map( (item, i) => {
        index = i+1

        document.getElementById("columns")
        .innerHTML += 
        `
            <div class="column is-one-quarter">
                <h1 class="title"><b>Exercício ${index}:</b></h1>
                <div class="box">
                <div id="ex1Content">
                    <p class="is-size-5"><b>${item.name}:</b></p>
                    <p class="paragraph">${item.content}:</p>
                </div>
            </div>
        `
    })
}