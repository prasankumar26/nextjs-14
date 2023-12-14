export default function PriviateRoute() {
    return <h1 className="text-black">Profile</h1>
}

// An example of seperating UI and Routing logic, is that you could put your Menu and Footer components in the _lib folder so users do not / cannot visit the component individually
// And yep, by adding %5F instead of underscore, I was able to use underscore in url string