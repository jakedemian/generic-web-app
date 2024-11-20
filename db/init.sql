CREATE TABLE IF NOT EXISTS test (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL
);

INSERT INTO test (message) VALUES ('From the backend!')
ON CONFLICT DO NOTHING;
