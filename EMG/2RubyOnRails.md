# Ruby on Rails

## ✅ What is Ruby on Rails?

Ruby on Rails is a **full-stack web framework** written in Ruby. It follows the **MVC pattern** (Model-View-Controller) and includes tools to build web apps fast; from database to frontend.

Popular apps built with Rails:

* GitHub
* Shopify
* Airbnb
* Basecamp

---

## 🧠 Rails Core Concepts

### 1. **MVC Pattern**

| Layer      | Purpose                             | Rails Tool         |
| ---------- | ----------------------------------- | ------------------ |
| Model      | Business logic + DB access          | Active Record ORM  |
| View       | UI using HTML + Embedded Ruby (ERB) | `.html.erb` files  |
| Controller | Links user input → model + view     | Controller classes |

---

### 2. **Opinionated Framework**

Rails gives you:

* **Convention over Configuration** ✅
* **Scaffolding**; Generate entire CRUD logic fast
* **CLI** for model/controller/gen tasks
* Built-in testing, job queues, mailers, websockets

---

## 🚀 Getting Started with Rails

### 🔧 Step 1: Install Dependencies

```bash
gem install rails
```

Or use:

```bash
rails new blog_app
cd blog_app
```

### 👀 Your Project Structure

```
blog_app/
├── app/
│   ├── models/
│   ├── views/
│   ├── controllers/
│   ├── jobs/        # background workers
│   ├── mailers/     # email system
│   └── channels/    # websockets
├── db/              # schema & seeds
├── config/          # routes, initializers
├── Gemfile          # dependencies
```

---

## 🛠️ Building a CRUD App in 1 Command

```bash
rails generate scaffold Post title:string body:text
```

Then:

```bash
rails db:migrate
rails server
```

Now open: [http://localhost:3000/posts](http://localhost:3000/posts)

🎉 You now have:

* Form to create a post
* List of posts
* Edit/Delete buttons
* DB integration using Active Record

---

## 💡 Key Files

### `routes.rb`

```ruby
resources :posts
```

Auto-creates 7 RESTful routes (index, show, new, create, edit, update, destroy)

### `posts_controller.rb`

```ruby
def index
  @posts = Post.all
end
```

### `index.html.erb`

```erb
<% @posts.each do |post| %>
  <h2><%= post.title %></h2>
  <p><%= post.body %></p>
<% end %>
```

---


Great! Let’s dive into the **Ruby on Rails Doctrine**; the core philosophy that shapes how Rails is built and how you’re expected to use it. This doctrine is what makes Rails feel so **magical** and **productive**, but also a bit **opinionated**.

---

# 🧠 Ruby on Rails Doctrine (Philosophy of Rails)

David Heinemeier Hansson (DHH), the creator of Rails, laid out a set of **guiding principles** for building applications the "Rails way".

These aren't just coding rules; they're **mindset rules** that help Rails teams write clean, maintainable, and beautiful apps faster.

---

## 🔟 The 10 Core Principles of Rails Doctrine

|  # | Principle                                | Summary                                                                                                               |
| -: | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
|  1 | 🧭 **Optimize for Programmer Happiness** | Rails prioritizes developer joy over theoretical purity. If it's delightful to use, it's probably right.              |
|  2 | 📐 **Convention over Configuration**     | Default settings reduce setup time; follow naming and folder conventions, and things “just work.”                    |
|  3 | ✨ **The Menu Is Omakase**                | You get a carefully chosen set of tools out of the box. You don’t pick each gem – Rails gives you a full course meal. |
|  4 | 🔍 **No One Paradigm**                   | Rails mixes OOP, FP, and more; it's pragmatic, not dogmatic. Whatever works best for productivity is allowed.        |
|  5 | 📏 **Exalt Beautiful Code**              | Readable, elegant code matters. The best code looks like poetry.                                                      |
|  6 | ⏱️ **Value Integrated Systems**          | Batteries-included: Rails prefers complete, integrated features (e.g., mailers, jobs) over DIY assembly.              |
|  7 | 🔂 **Progress Over Stability**           | Rails embraces change. APIs can break if it's necessary for better patterns (e.g., Turbo replacing AJAX).             |
|  8 | ⚡ **Convention AND Configuration**       | While Rails defaults are powerful, you can override almost everything when needed. It's flexible too.                 |
|  9 | 🔥 **Fail Fast**                         | Raise errors early. Don’t silently ignore issues; loud failures make debugging easier.                               |
| 10 | 💎 **Push Code, Not Specs**              | Focus on shipping features, not pleasing abstract rules or adding unnecessary tests.                                  |

---

## 💡 What This Means in Practice

| Doctrine Principle     | Real-World Example in Rails                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| Convention over Config | Models go in `/app/models`, controllers in `/app/controllers` by default; no setup needed            |
| Omakase Menu           | Rails gives you ActiveRecord, ActionMailer, ActionCable, etc. You don’t need to research alternatives |
| Integrated Systems     | WebSockets (ActionCable), background jobs (ActiveJob), APIs, emails – all built-in                    |
| Fail Fast              | If you forget a route or method, Rails throws loud errors to help you catch it early                  |
| Beautiful Code         | Rails encourages concise methods, clean logic, expressive syntax                                      |
| No One Paradigm        | You can use mixins, lambdas, service objects, decorators; flexibility is encouraged                  |

---

## 🧘 Why Follow the Doctrine?

✅ You’ll build features faster
✅ Your app will be easier to maintain
✅ You'll collaborate better with other Rails developers
✅ It reduces decision fatigue (no need to reinvent the wheel)

---

## 🚀 TL;DR – Rails Is About:

* ❤️ Loving the developer experience
* 🧠 Thinking pragmatically, not dogmatically
* 🔧 Trusting good defaults unless you *need* to override
* 🪄 Building more with less code

---
Let’s bring the **Ruby on Rails Doctrine to life** by building a small blog post app and showing how each principle manifests directly in the code and experience.

---

## 🎯 App Goal:

We’ll build a CRUD interface for `Post` objects with `title` and `body`.

---

## ✅ Step-by-Step with Doctrine in Action

### ⚙️ 1. Generate a New App

```bash
rails new blog_app
cd blog_app
```

🧭 **Doctrine: Optimize for Programmer Happiness**

> One command gives you a fully ready environment with structure, sensible defaults, and tools.

---

### 🏗️ 2. Generate Scaffold

```bash
rails generate scaffold Post title:string body:text
```

📐 **Doctrine: Convention over Configuration**

> Rails knows exactly where to put the model, controller, views, routes, tests, etc. — no config needed!

```
create  app/models/post.rb
create  app/controllers/posts_controller.rb
create  app/views/posts/index.html.erb
create  db/migrate/2025xxxxxx_create_posts.rb
...
```

📏 **Doctrine: Exalt Beautiful Code**

> The generated controller and views follow idiomatic Rails — readable and minimal.

---

### 🗃️ 3. Migrate the Database

```bash
rails db:migrate
```

🔥 **Doctrine: Fail Fast**

> If your schema or migrations are invalid, Rails throws clear errors immediately before you ship broken code.

---

### 🚀 4. Run the App

```bash
rails server
```

Visit: [http://localhost:3000/posts](http://localhost:3000/posts)

🔁 **Doctrine: Progress Over Stability**

> Rails evolves quickly. If better ways to do CRUD/UI/API emerge, newer versions will adopt them (e.g., Hotwire replacing old AJAX patterns).

---

## 🧪 Code Highlights That Reflect the Doctrine

### 📄 `routes.rb`

```ruby
resources :posts
```

📐 **Convention over Configuration**

> This single line defines **7 RESTful routes** automatically.

---

### 📂 `posts_controller.rb`

```ruby
def index
  @posts = Post.all
end
```

📏 **Exalt Beautiful Code**

> Elegant, minimal, and expressive.

📐 **Convention over Config**

> By naming it `PostsController` and using `resources :posts`, Rails knows how to wire it up.

---

### 💡 `index.html.erb`

```erb
<% @posts.each do |post| %>
  <h2><%= post.title %></h2>
  <p><%= post.body %></p>
<% end %>
```

🧭 **Optimize for Happiness**

> Embedded Ruby (ERB) is simple and powerful. Logic and UI flow together naturally.

---

### 💎 `post.rb` (Model)

```ruby
class Post < ApplicationRecord
  validates :title, presence: true
end
```

⚡ **Doctrine: Convention and Configuration**

> Rails gives you default DB access methods (like `Post.all`, `Post.find`, etc.) but lets you customize validations, associations, etc.

---

### 🎁 Bonus: Use the Built-in Stack

* **Mailer**: `rails generate mailer UserMailer`
* **Job**: `rails generate job CleanupPosts`
* **Channel**: `rails generate channel Notification`

🍱 **Doctrine: The Menu Is Omakase**

> Instead of choosing third-party tools, Rails gives you trusted, first-party solutions for mail, background jobs, websockets, etc.

---

## 🧠 Summary Table

| Rails Doctrine                | Real Code Example                               |
| ----------------------------- | ----------------------------------------------- |
| Convention over Configuration | `resources :posts`, scaffold generators         |
| Optimize for Happiness        | Full CRUD with 2 commands                       |
| Exalt Beautiful Code          | Clean MVC separation, auto HTML rendering       |
| Fail Fast                     | Immediate error on bad migration or route       |
| Menu is Omakase               | Use `ActiveJob`, `ActionMailer`, `ActionCable`  |
| Progress Over Stability       | Built-in Hotwire/Turbo instead of JS frameworks |
| Value Integrated Systems      | Entire stack from DB to frontend in one command |

---



