DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id uuid PRIMARY KEY,
    name       varchar(120) NOT NULL,
    role       varchar NOT NULL,
    created_at timestamp
);

DROP TABLE IF EXISTS boards;
CREATE TABLE boards (
    id           uuid PRIMARY KEY,
    name         varchar(250) NOT NULL,
    parent_board uuid REFERENCES boards (id)
);

DROP TABLE IF EXISTS threads;
CREATE TABLE threads (
    id             uuid PRIMARY KEY,
    name           varchar(250) NOT NULL,
    created_at     timestamp,
    created_by     uuid REFERENCES users (id),
    last_posted_in timestamp,
    last_posted_by uuid REFERENCES users (id),
    board_id       uuid REFERENCES boards (id)
);

DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
    id              uuid PRIMARY KEY,
    content         varchar(10000),
    created_at      timestamp,
    created_by uuid REFERENCES users (id),
    last_edited_at  timestamp,
    thread_id uuid  REFERENCES threads (id)
)
