import React from 'react';
function Card() {
    return (
        <div className="Card" class="container-fluid mt-3">
            <div class="row">
                <div class="col-4">
                    <div class="card text-white bg-primary mb-3"  >
                        <div class="card-header">Card 01</div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card text-white bg-warning mb-3"  >
                        <div class="card-header">Card 02</div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card text-white bg-success mb-3"  >
                        <div class="card-header">Card 03</div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;