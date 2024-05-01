CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    topic_name VARCHAR(255) NOT NULL
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    topic_id INT NOT NULL,
    question_text TEXT NOT NULL,
    correct_answer_id INT NOT NULL,
    score INT NOT NULL,
    FOREIGN KEY (topic_id) REFERENCES topics(id)
);

CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    question_id INT NOT NULL,
    answer_text TEXT NOT NULL,
    FOREIGN KEY (question_id) REFERENCES questions(id)
);
