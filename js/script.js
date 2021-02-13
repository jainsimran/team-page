$(document).ready(renderCoaches);

function renderCoaches() {
    for (var i = 0; i < COACH_LIST.length; i++) {
        $("#coach-list").append(
            `<div class="col-lg-3 col-xs-12 col-md-6 text-center mt-4">
                <div class="card">
                    <div class="card-image px-3 pt-4 pb-1">
                        <img src="img/${COACH_LIST[i].image}" alt="${COACH_LIST[i].name}"/>
                    </div>
                    <div class="card-desc px-4 pb-4">
                        <h2 class="m-0">${COACH_LIST[i].name}</h2>
                        <p>${COACH_LIST[i].email}</p>
                        <p class="text-center">${COACH_LIST[i].shortBio}</p>
                        <div class="d-block d-sm-block d-md-none">
                            <p id="gloriaLongDesp" class="collapsing text-center">${COACH_LIST[i].bio}</p>
                            <button type="button" class="btn btn-primary btn-sm" data-toggle="collapse" data-target="#gloriaLongDesp" aria-expanded="false" aria-controls="gloriaLongDesp"> </button>
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

function openModal(index) {
    $('.modal-body').html(`
        <div class="container">
            <div class="row">
                <div class="col-md-4 text-left">
                    <img id="headshot-modal"src="img/${COACH_LIST[index].image}"/>
                    <h3 class="m-0">${COACH_LIST[index].name}</h3>
                    <p>abcd@gmail.com</p>
                </div>
                <div class="col-md-8 text-left">
                    <h4 class="text-left">${COACH_LIST[index].shortBio}</h4>
                    <p>${COACH_LIST[index].bio}</p>
            </div>
        </div>
     `);
    $('.modal').modal('show');
}

function closeModal() {
    $('.modal').modal('hide');
}