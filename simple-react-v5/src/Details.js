import React, { Component } from 'react'
import pet from '@frontendmasters/pet'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  // = UseEffect
  componentDidMount() {
    pet
      .animal(Number(this.props.id))
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: animal.contact.address.city,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
          height: 100
        })
      })
      .catch(err => this.setState({ error: err }))
  }
  // Every class component must have a render method
  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>
    }
    const { animal, breed, location, description, media, name, height } = this.state
    return (
      <div className="d-flex justify-content-between">
        <img src={media} alt="Pet" style={{ height: height + '%' }} />
        <div>
          <h1 className="my-2">Pet name: {name}</h1>
          <h2 className="my-2">{`${animal} — ${breed} — ${location}`}</h2>
          <button className="btn btn-lg btn-primary my-2">Adopt {name} now!</button>
          <p className="my-2">{description}</p>
        </div>
      </div>
    )
  }
}

export default Details
