import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

/*class Destinos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recomendados: [
                {
                    id: 0,
                    name: 'Uthappizza',
                    image: 'assets/img.JPG',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                    id: 1,
                    name: 'Zucchipakoda',
                    image: 'assets/img1.JPG',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/img2.JPG',
                    category: 'appetizer',
                    label: 'New',
                    price: '1.99',
                    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                    id: 3,
                    name: 'ElaiCheese Cake',
                    image: 'assets/img.JPG',
                    category: 'dessert',
                    label: '',
                    price: '2.99',
                    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }
            ],
        };
    }

    render() {
        const destino = this.state.recomendados.map((dish) => {
            return (
                <div key={dish.id} className="algo">
                    <div className='row'>
                        <div className='col'>
                            <Media tag="li">
                                <Media left middle>
                                    <Media object src={dish.image} alt={dish.name} />
                                </Media>
                                <Media body className="ml-5">
                                    <Media heading className='text-center'>{dish.name}</Media>
                                    <p>{dish.description}</p>
                                    <p>{dish.category}</p>
                                </Media>
                            </Media>
                        </div>
                        
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {destino}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Destinos;*/



 


class Destinos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const destinos = this.props.destinos.map((dish) => {
            return (
              <div  key={dish.id} className="col-12 col-md-5 m-1">
                <Card 
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {destinos}
                </div>
                <div className="row">
                  <div  className="row">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Destinos;