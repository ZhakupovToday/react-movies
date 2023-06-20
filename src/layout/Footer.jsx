function Footer () {
    return  <footer className="page-footer green darken-1 footer">
      <div >
        <div className="container">
        © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
}

export {Footer}