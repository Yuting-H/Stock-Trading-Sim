# Requirements

## Functional Requirements

### User

- User can create an account
- User can log in to their profile
- Logged in user can see their account balance and their portfolio
- Guest user can make trades only on some stocks, like a demo stock that resets everyday
- Guest user's data is not saved, or is deleted every day

### Trading

- User can get a set amount of cash evert day by performing some simple action
- User can select and view differnt stocks
- User can create buy and sell orders
- User can fulfill buy and sell orders made by other users
- Stock information displaying graph chart and current buy and sell orders

## Non-Functional Requirements

### Libraries

- Use Firebase, Express, React and Node to accomplish main features
- Use other libraries such as tailwind to reduce implementing features manually

### Directory Structure

- Frontend code should be stored in `./client/`, backend in `./server/`
- `./server/services/` should store core businsess logic
- `./server/controllers/` should store http handlling logic
- `./server/routes/` should store mapping between urls to controller functions

### Interface

- User visit should be greeted with a default stock page. Could be some kind of index funds

### Code Logic

- Monetary values must be calculated using fixed 4 decimal places

### Code quality

- Have JSDoc type definition stored in a `types/` directory
