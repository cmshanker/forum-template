DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id serial PRIMARY KEY,
    name       varchar(120) NOT NULL,
    role       varchar NOT NULL,
    created_at timestamp
);

DROP TABLE IF EXISTS boards;
CREATE TABLE boards (
    id           serial PRIMARY KEY,
    name         varchar(250) NOT NULL,
    parent_board integer REFERENCES boards (id)
);

DROP TABLE IF EXISTS threads;
CREATE TABLE threads (
    id             serial PRIMARY KEY,
    name           varchar(250) NOT NULL,
    created_at     timestamp,
    created_by     integer REFERENCES users (id),
    last_posted_in timestamp,
    last_post_by   integer REFERENCES users (id),
    board_id       integer REFERENCES boards (id)
);

DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
    id              serial PRIMARY KEY,
    content         varchar(10000),
    created_at      timestamp,
    created_by      integer REFERENCES users (id),
    last_edited_at  timestamp,
    thread_id       integer REFERENCES threads (id)
)
