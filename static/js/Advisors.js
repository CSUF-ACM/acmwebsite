
//NOTE: PLEASE MAKE SURE IMAGES ARE IN img FOLDER!

/**
* Advisor Generator
*
* @param image
* @param name
* @param title
* @param email
* @param color
*
*/
const Advisor = ({image, name, title, email, color}) => {
    return (
      <div>
          <div className={"uk-tile uk-tile-" + color}>
              <img className="uk-border-circle" width="75" height="75" alt={name + "'s headshot image"} src={"img/" + image} />
              <p className="uk-h4">{name}</p>
              <p className=" uk-margin-remove-top uk-label">{title}</p>
              <p><a href={"mailto:" + email} aria-label={name + "'s email link"} className="uk-icon-button  uk-margin-small-right uk-animation-scale-up" uk-icon="icon: mail"></a></p>
          </div>
      </div>
    );
};

/**
* AdvisorList Generator
*
* @param members * an array must include [id, image, name, title, email]
*
*/
const AdvisorList = ({advisors}) => {
  return (
    <div className="uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-collapse uk-grid-match uk-text-center" uk-grid="">
          {
              advisors.map((user, i) => {
              return (
                  <Advisor
                      key={advisors[i].id}
                      image={advisors[i].image}
                      name={advisors[i].name}
                      title={advisors[i].title}
                      email={advisors[i].email}
                      color={advisors[i].id%3 == 0 ? ('primary') : (advisors[i].id%2 == 0 ? ('secondary') : ('muted'))} />
              );
              })
          }
      </div>
  )
};

/**
* Shows the Advisors
*/

ReactDOM.render(<div>

<AdvisorList advisors={AdvisorsList} />

</div>, document.getElementById("advisors-list"));
