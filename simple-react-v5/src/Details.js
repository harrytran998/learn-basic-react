import React, { Component } from 'react'
import pet from '@frontendmasters/pet'
import ErrorBoundary from './ErrorBoundary'
// import Carousel from './Carousel' => Just for fun!
import ThemeContext from './ThemeContext'

class Details extends Component {
  state = { loading: true }
  // = UseEffect
  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          type: animal.type,
          location: animal.contact.address.city,
          description: animal.description,
          media: animal.photos[0].large,
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
    const { type, breed, location, description, media, name, height } = this.state
    return (
      <div className="d-flex justify-content-between">
        <img src={media} alt="Pet" style={{ height: height + '%' }} />
        <div className="pl-4">
          <h1 className="my-2">Pet name: {name}</h1>
          <h2 className="my-2">{`${type.toUpperCase()} — ${breed} — ${location}`}</h2>
          <ThemeContext.Consumer>
            {/* Old structure 
              {(themeHook) => (<button style={{ color: themeHook[0] }} className="btn btn-lg btn-primary my-2">Adopt {name} now!</button>)}
            */}
            {/* Using Destructure */}
            {([theme]) => (
              <button style={{ color: theme }} className="btn btn-lg btn-primary my-2">
                Adopt {name} now!
              </button>
            )}
          </ThemeContext.Consumer>
          <p className="my-2">{description}</p>
        </div>
      </div>
    )
  }
}

/**
 * {...props} pass all props in the children component
 * Ex here: {...props} = id={props.id}
 * *** Should just wrap 1 component inside
 * @param {*} props
 */
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
}
