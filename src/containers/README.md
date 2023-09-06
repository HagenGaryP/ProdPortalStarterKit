# Containers

Larger components and UI Layouts will be kept here. (optional)

Since Components are supposed to be simple and reusable, sometimes it's better to
separate the more complex portions from the simple components into a container.

The logic and means of handling certain state updates could be written here,
and the structure would be as follows:

A directory for a given layout, or larger than usual component, can be made inside
the "containers" directory. Within those subdirectories, a file should be made for
a given building block or UI layout that it pertains to.

For example, inside of the "containers" directory, you could make another folder called "AppHeader".
Then everything inside the "AppHeader" directory would be for any code that is more complex than
just a simple component.
