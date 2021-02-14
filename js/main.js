/** Render the coach's information on document ready. */
$(document).ready(renderCoaches);

/**
 * Render the description for all coaches.
 * The coaches data is modelled in data.js file.
 * Instead of hard coding it in HTML file, this approach will give us flexibility to plugin data from
 * any API or databases in future.
 */
function renderCoaches() {
    for (var i = 0; i < COACH_LIST.length; i++) {
        $("#coach-list").append(
            `<div class="col-lg-4 col-xs-12 col-md-6 text-center mt-4">
                <div class="card">
                    <div class="px-3 pt-4 pb-1">
                        <img class="card-image" src="img/${COACH_LIST[i].image}" alt="${COACH_LIST[i].name}" />
                    </div>
                    <div class="card-desc px-4 pb-4">
                        <h2 class="m-0">${COACH_LIST[i].name}</h2>
                        <p>${COACH_LIST[i].email}</p>
                        <p class="text-center">${COACH_LIST[i].shortBio}</p>
                        <div class="d-block d-sm-block d-md-none">
                            <p id="${COACH_LIST[i].email.split('@')[0]}" class="collapsing text-center">${COACH_LIST[i].bio}</p>
                            <button type="button" class="btn btn-primary btn-sm collapsed btn-toggle" data-toggle="collapse" data-target="#${COACH_LIST[i].email.split('@')[0]}" aria-expanded="false" aria-controls="gloriaLongDesp"> </button>
                        </div>
                        <div class="d-none d-md-block">
                            <button type="button" class="btn btn-primary btn-md" onClick="openModal(${i})">Read more</button>
                        </div>
                    </div>
                </div>
            </div>`
        );
    }
}

/**
 * Opens the modal window to render and display detailed bio of selected coach.
 * @param {number} index - Index of the coach in the list that is selected.
 */
function openModal(index) {
    /** Apend modal body with selected coach details */
    $('.modal-body').html(`
        <div class="container">
            <div class="row">
                <div class="col-md-4 text-center">
                    <img class="modal-image" id="headshot-modal"src="img/${COACH_LIST[index].image}"/>
                    <h3 class="m-0">${COACH_LIST[index].name}</h3>
                    <p>${COACH_LIST[index].email}</p>
                </div>
                <div class="col-md-8 text-left">
                    <h4 class="text-left">${COACH_LIST[index].shortBio}</h4>
                    <p>${COACH_LIST[index].bio}</p>
            </div>
        </div>
    `);
    /** Show the modal window */
    $('.modal').modal('show');
}

/**
 * Hides the modal window.
 */
function closeModal() {
    $('.modal').modal('hide');
}