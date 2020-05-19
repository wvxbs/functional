export const RenderResults = (results) => {
    exerciseColumns(results);
}

const exerciseColumns = results => {

    results.map((item, i) => {
        document.getElementById("columns")
        .innerHTML += 
        `
        <div class="columns is-multiline is-desktop is-tablets is-1"  id="column">
            <h1 class="title">${i +1}</h1>
        </div>
        `
    
        genericBox(item)
    })
}

const genericBox = results => {
    var index = 0

    results.map( (item, i) => {
        index = i+1

        document.getElementById("column")
        .innerHTML += 
        `
            <div class="column is-one-quarter">
                <div class="box">
                <div id="ex1Content">
                    <p class="is-size-5"><b>${item.name}:</b></p>
                    <p class="paragraph">${item.content}:</p>
                </div>
            </div>
        `
    })
}