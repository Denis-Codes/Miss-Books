import { utilService } from "../services/util.service"

export function About() {

    return (
        <section className="about">
            <h1>About cars and us...</h1>
            <p>{utilService.makeLorem(30)}</p>
        </section>
    )
}