Decided to do this task in React Native because RN scales for the web, not the vise versa.
I did all the things that was mandatory in my opinion, including FlashList to virtualize list, search with debounce, zod data validation, refresh control.

also, would be nice to:

- create some api instance with fixed url and some api key / token authorization.
- optimizing search with pagination for api request (or some other way to optimize search, like do calculations on a different thread).
- add some frontend caching.
- add eslint.
- add basic ui-kit. (color palette, typography, etc)
- have already processed data from the api.
- make a lil bit different store architecture, where we gonna have root store which connects other stores for different parts of the app. (if we would need to scale the app)
- make different list for the web to support virtualization.
