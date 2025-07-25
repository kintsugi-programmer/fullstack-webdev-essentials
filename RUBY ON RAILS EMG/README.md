# Ruby on Rails
- Powerful web framework
- help to make powerfull websites
- used by top companies
## Get Started
- Open IDE, VSC
- download node.js :https://nodejs.org/en/download
- download yarn :npm install --global yarn
- download ruby :sudo apt install ruby
- download other tools : sudo apt install ruby-dev build-essential libyaml-dev #for linux
- download rails :gem install rails
- create rails project, plain right now
```
rails new soralink #this will generate rails MVC Project :0
```
- if sudo error
  ```
  sudo chown -R $USER:$USER ~/.gem ~/.bundle /var/lib/gems
  ```
```
cd soralink
```
## MVC Architecture
- rails is a MVC Framework
- model-view-controller
```
bali-king@war-machine:~/BaliGit/soralink$ ls
app  bin  config  config.ru  db  Dockerfile  Gemfile  Gemfile.lock  lib  log  public  Rakefile  README.md  script  storage  test  tmp  vendor
bali-king@war-machine:~/BaliGit/soralink$ cd app
bali-king@war-machine:~/BaliGit/soralink/app$ ls -R
.:
assets  controllers  helpers  javascript  jobs  mailers  models  views

./assets:
images  stylesheets

./assets/images:

./assets/stylesheets:
application.css

./controllers:
application_controller.rb  concerns

./controllers/concerns:

./helpers:
application_helper.rb

./javascript:
application.js  controllers

./javascript/controllers:
application.js  hello_controller.js  index.js

./jobs:
application_job.rb

./mailers:
application_mailer.rb

./models:
application_record.rb  concerns

./models/concerns:

./views:
layouts  pwa

./views/layouts:
application.html.erb  mailer.html.erb  mailer.text.erb

./views/pwa:
manifest.json.erb  service-worker.js
bali-king@war-machine:~/BaliGit/soralink/app$
```
- in rubyonrails: html.erb
- view: end product, webpage 
- model: has all data, bring webpage to you
- controller: control all stuff gave to you
- start rails server
```
rails s
```
```
bali-king@war-machine:~/BaliGit/soralink$ rails s
=> Booting Puma
=> Rails 8.0.2 application starting in development 
=> Run `bin/rails server --help` for more startup options
Puma starting in single mode...
* Puma version: 6.6.0 ("Return to Forever")
* Ruby version: ruby 3.3.7 (2025-01-15 revision be31f993d7) [x86_64-linux-gnu]
*  Min threads: 3
*  Max threads: 3
*  Environment: development
*          PID: 17141
* Listening on http://127.0.0.1:3000
* Listening on http://[::1]:3000
Use Ctrl-C to stop

```
![alt text](image.png)

## Create First Page

- create a controller (named home) and give it method (named index)
  ```
  rails g controller home index
  ```
  ```
  bali-king@war-machine:~/BaliGit/soralink$ rails g controller home index
      create  app/controllers/home_controller.rb
       route  get "home/index"
      invoke  erb
      create    app/views/home
      create    app/views/home/index.html.erb
      invoke  test_unit
      create    test/controllers/home_controller_test.rb
      invoke  helper
      create    app/helpers/home_helper.rb
      invoke    test_unit
  bali-king@war-machine:~/BaliGit/soralink$ 
  ```
- cd config/routes.rb
- config/routes.rb: where all routes(roads ) are designed
```
Rails.application.routes.draw do
  get "home/index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
end
```
- beause of `rails g controller home index`
  - we have home index view: app/views/home/index.html.erb
  - we have home index controller: app/controllers/home_controller.rb
- define a root for home page `root "home#index"` inside `config/routes.rb`
```
Rails.application.routes.draw do
  get "home/index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  root "home#index"
end

```
- sometimes runtime error resolves just after refresh as its based on admin privilege stuff
![alt text](image-1.png)
- change in app/views/home/index.html.erb, eg : hello world
![alt text](image-2.png)
![alt text](image-3.png)

## First Scaffold with Rails
- will make you fall in love with rails
- Scaffolding makes your code 10x faster your pace
- Scaffolding let's you creat `CRUD` Layout in Rails, Foundation of any webapp
- create scaffold (named tree) & add attributes (name:string, x:string, instagram:string, youtube:string user_id:integer style:string)
```
rails g scaffold tree name:string x:string instagram:string youtube:string user_id:integer style:string
```
- after enter you will see madness of file creation
```
bali-king@war-machine:~/BaliGit/soralink$ rails g scaffold tree name:string x:string instagram:string youtube:string user_id:integer style:string
      invoke  active_record
      create    db/migrate/20250725211443_create_trees.rb
      create    app/models/tree.rb
      invoke    test_unit
      create      test/models/tree_test.rb
      create      test/fixtures/trees.yml
      invoke  resource_route
       route    resources :trees
      invoke  scaffold_controller
      create    app/controllers/trees_controller.rb
      invoke    erb
      create      app/views/trees
      create      app/views/trees/index.html.erb
      create      app/views/trees/edit.html.erb
      create      app/views/trees/show.html.erb
      create      app/views/trees/new.html.erb
      create      app/views/trees/_form.html.erb
      create      app/views/trees/_tree.html.erb
      invoke    resource_route
      invoke    test_unit
      create      test/controllers/trees_controller_test.rb
      create      test/system/trees_test.rb
      invoke    helper
      create      app/helpers/trees_helper.rb
      invoke      test_unit
      invoke    jbuilder
      create      app/views/trees/index.json.jbuilder
      create      app/views/trees/show.json.jbuilder
      create      app/views/trees/_tree.json.jbuilder
bali-king@war-machine:~/BaliGit/soralink$ 
```
- migrate the pending migration to the database, run this just after the scaffold command, vital important
```
rails db:migrate
```
```
bali-king@war-machine:~/BaliGit/soralink$ rails db:migrate
== 20250725211443 CreateTrees: migrating ======================================
-- create_table(:trees)
   -> 0.0010s
== 20250725211443 CreateTrees: migrated (0.0010s) =============================

bali-king@war-machine:~/BaliGit/soralink$ 
```
- i.e. this created `db/schema.rb`, this below is scaffold
```
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_07_25_211443) do
  create_table "trees", force: :cascade do |t|
    t.string "name"
    t.string "x"
    t.string "instagram"
    t.string "youtube"
    t.integer "user_id"
    t.string "style"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
end
```
![alt text](image-4.png)
- these 2 below are default attributes in scaffold
```
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
```
- it created new view,controller,modal named tree
  - `app/views/trees`
  - `app/models/tree.rb`
  - `app/controllers/trees_controller.rb`
- create new link to tree in `app/views/home/index.html.erb`
  - embedded ruby [RENDER OFF]`<%%>`
  - embedded ruby [RENDER ON] `<%= %>`
  - eg: create link `<%= link_to "New Tree", new_tree_path%>`
![alt text](image-5.png)
![alt text](image-6.png)
- now you can create new tree, edit it , destroy(delete) it
  ![alt text](image-7.png)
  ![alt text](image-9.png)
  ![alt text](image-8.png)
- created too many stuff with just one command !!!!!!

## Rails Routes
- `rails routes` : give you mountain full of routes
```
bali-king@war-machine:~/BaliGit/soralink$ rails routes
                                  Prefix Verb   URI Pattern                                                                                       Controller#Action
                                                /assets                                                                                           Propshaft::Server
                                   trees GET    /trees(.:format)                                                                                  trees#index
                                         POST   /trees(.:format)                                                                                  trees#create
                                new_tree GET    /trees/new(.:format)                                                                              trees#new
                               edit_tree GET    /trees/:id/edit(.:format)                                                                         trees#edit
                                    tree GET    /trees/:id(.:format)                                                                              trees#show
                                         PATCH  /trees/:id(.:format)                                                                              trees#update
                                         PUT    /trees/:id(.:format)                                                                              trees#update
                                         DELETE /trees/:id(.:format)                                                                              trees#destroy
                              home_index GET    /home/index(.:format)                                                                             home#index
                      rails_health_check GET    /up(.:format)                                                                                     rails/health#show
                                    root GET    /                                                                                                 home#index
        turbo_recede_historical_location GET    /recede_historical_location(.:format)                                                             turbo/native/navigation#recede
        turbo_resume_historical_location GET    /resume_historical_location(.:format)                                                             turbo/native/navigation#resume
       turbo_refresh_historical_location GET    /refresh_historical_location(.:format)                                                            turbo/native/navigation#refresh
           rails_postmark_inbound_emails POST   /rails/action_mailbox/postmark/inbound_emails(.:format)                                           action_mailbox/ingresses/postmark/inbound_emails#create
              rails_relay_inbound_emails POST   /rails/action_mailbox/relay/inbound_emails(.:format)                                              action_mailbox/ingresses/relay/inbound_emails#create
           rails_sendgrid_inbound_emails POST   /rails/action_mailbox/sendgrid/inbound_emails(.:format)                                           action_mailbox/ingresses/sendgrid/inbound_emails#create
     rails_mandrill_inbound_health_check GET    /rails/action_mailbox/mandrill/inbound_emails(.:format)                                           action_mailbox/ingresses/mandrill/inbound_emails#health_check
           rails_mandrill_inbound_emails POST   /rails/action_mailbox/mandrill/inbound_emails(.:format)                                           action_mailbox/ingresses/mandrill/inbound_emails#create
            rails_mailgun_inbound_emails POST   /rails/action_mailbox/mailgun/inbound_emails/mime(.:format)                                       action_mailbox/ingresses/mailgun/inbound_emails#create
          rails_conductor_inbound_emails GET    /rails/conductor/action_mailbox/inbound_emails(.:format)                                          rails/conductor/action_mailbox/inbound_emails#index
                                         POST   /rails/conductor/action_mailbox/inbound_emails(.:format)                                          rails/conductor/action_mailbox/inbound_emails#create
       new_rails_conductor_inbound_email GET    /rails/conductor/action_mailbox/inbound_emails/new(.:format)                                      rails/conductor/action_mailbox/inbound_emails#new
           rails_conductor_inbound_email GET    /rails/conductor/action_mailbox/inbound_emails/:id(.:format)                                      rails/conductor/action_mailbox/inbound_emails#show
new_rails_conductor_inbound_email_source GET    /rails/conductor/action_mailbox/inbound_emails/sources/new(.:format)                              rails/conductor/action_mailbox/inbound_emails/sources#new
   rails_conductor_inbound_email_sources POST   /rails/conductor/action_mailbox/inbound_emails/sources(.:format)                                  rails/conductor/action_mailbox/inbound_emails/sources#create
   rails_conductor_inbound_email_reroute POST   /rails/conductor/action_mailbox/:inbound_email_id/reroute(.:format)                               rails/conductor/action_mailbox/reroutes#create
rails_conductor_inbound_email_incinerate POST   /rails/conductor/action_mailbox/:inbound_email_id/incinerate(.:format)                            rails/conductor/action_mailbox/incinerates#create
                      rails_service_blob GET    /rails/active_storage/blobs/redirect/:signed_id/*filename(.:format)                               active_storage/blobs/redirect#show
                rails_service_blob_proxy GET    /rails/active_storage/blobs/proxy/:signed_id/*filename(.:format)                                  active_storage/blobs/proxy#show
                                         GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                                        active_storage/blobs/redirect#show
               rails_blob_representation GET    /rails/active_storage/representations/redirect/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations/redirect#show
         rails_blob_representation_proxy GET    /rails/active_storage/representations/proxy/:signed_blob_id/:variation_key/*filename(.:format)    active_storage/representations/proxy#show
                                         GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format)          active_storage/representations/redirect#show
                      rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                                       active_storage/disk#show
               update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                               active_storage/disk#update
                    rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                                    active_storage/direct_uploads#create
bali-king@war-machine:~/BaliGit/soralink$ 
```
- here we have
  - 2 actual routes
    - `trees#create new_tree GET    /trees/new(.:format)`
    - `home#index rails_health_check GET    /up(.:format)`
  - rest variable routes, dynamic, contains `:id` 
    - eg : `trees#show PATCH  /trees/:id(.:format)`
- routes always end with `:path`

## Add User Auth 
- sign up, log in
- with ruby gem `devise`: flexible auth sol for rails with warden
  - `bundle add device`
  - or add it to Gemfile
    - add this in bottom of Gemfile
    ```
    # My Custom Gems
    gem 'devise'
    gem 'brypt' # prereq of devise
    ```
    - then in terminal: `bundle install` (this will update the Gemfile)
- ruby gem : libraries consist of production tools in community to code faster, rubygems.org(for ruby,but most of them also works with rails)
- Gemfile : index consists all of our packages 
- bundle install : gem with fetch gems metadata from offcial rubygems.org server and install , install it using `sudo gem install bundler`
- then in terminal: `bundle install` (this will update the Gemfile)
- if any permission error
  ```
  bundle config set --local path 'vendor/bundle'
  bundle install
  ```
  or use `sudo bundle install`

- devise 
  - followup from doc
  - `rails generate devise:install` runs generator of devise
  - also gives some instructions for manual setup depending on app's configuration 
    - ![alt text](image-10.png)
    - ![alt text](image-11.png)
    - `app/views/layouts/application.html.erb` it renders every other view [IMP]
    ```
    bali-king@war-machine:~/BaliGit/soralink$ rails g devise:views
      invoke  Devise::Generators::SharedViewsGenerator
      create    app/views/devise/shared
      create    app/views/devise/shared/_error_messages.html.erb
      create    app/views/devise/shared/_links.html.erb
      invoke  form_for
      create    app/views/devise/confirmations
      create    app/views/devise/confirmations/new.html.erb
      create    app/views/devise/passwords
      create    app/views/devise/passwords/edit.html.erb
      create    app/views/devise/passwords/new.html.erb
      create    app/views/devise/registrations
      create    app/views/devise/registrations/edit.html.erb
      create    app/views/devise/registrations/new.html.erb
      create    app/views/devise/sessions
      create    app/views/devise/sessions/new.html.erb
      create    app/views/devise/unlocks
      create    app/views/devise/unlocks/new.html.erb
      invoke  erb
      create    app/views/devise/mailer
      create    app/views/devise/mailer/confirmation_instructions.html.erb
      create    app/views/devise/mailer/email_changed.html.erb
      create    app/views/devise/mailer/password_change.html.erb
      create    app/views/devise/mailer/reset_password_instructions.html.erb
      create    app/views/devise/mailer/unlock_instructions.html.erb
    bali-king@war-machine:~/BaliGit/soralink$ 
    ```
- `rails generate devise MODEL` here naming user as MODEL
- then `rails db:migrate`
```
bali-king@war-machine:~/BaliGit/soralink$ rails generate devise user
      invoke  active_record
      create    db/migrate/20250725223932_devise_create_users.rb
      create    app/models/user.rb
      invoke    test_unit
      create      test/models/user_test.rb
      create      test/fixtures/users.yml
      insert    app/models/user.rb
       route  devise_for :users
bali-king@war-machine:~/BaliGit/soralink$ rails db:migrate
== 20250725223932 DeviseCreateUsers: migrating ================================
-- create_table(:users)
   -> 0.0010s
-- add_index(:users, :email, {:unique=>true})
   -> 0.0006s
-- add_index(:users, :reset_password_token, {:unique=>true})
   -> 0.0006s
== 20250725223932 DeviseCreateUsers: migrated (0.0023s) =======================

bali-king@war-machine:~/BaliGit/soralink$ 
```
- we're not done yet
- we want that , whenever someone click new tree, it directs to auth. part
  - by just one line in rubyonrails
  - `before_action :authenticate_user!` inside `app/controllers/trees_controller.rb` WOW
![alt text](image-12.png)
















# Others: Ruby on Rails ChatGPT Info

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



