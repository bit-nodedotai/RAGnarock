# Reset local data

If uploads are missing or your local app state seems wrong, you can start fresh by
removing the Docker volumes for this development stack. This permanently deletes
the local database and uploaded files, so use these steps only for your laptop's
development environment—not for production data.

## What is stored locally

Docker Compose keeps PostgreSQL data in the `pgdata` volume and uploaded files in
a separate `uploads` volume. The database holds application records and
session-related state; the uploads volume holds the files themselves.

Removing the volumes resets the local database and deletes local uploads. You
cannot recover that data by starting the stack again.

## Stop the stack

From the repository root, stop the development services:

```bash
docker compose down
```

This removes the containers and network but keeps the volumes, so the local data
is still there.

## Delete the volume

To remove the local database and start clean, run:

```bash
docker compose down -v
```

The `-v` option deletes this Compose project's local volumes, including the
PostgreSQL database volume and the uploads volume. It also removes the other
project volumes, such as local caches. This is destructive and cannot be undone.

## Start again

Recreate and start the development stack from the repository root:

```bash
docker compose up --build
```

Docker creates empty volumes, and the app starts with a fresh local database and
no uploaded files. For more setup details, see [Event setup](../event-setup.md).

## What not to delete

- Do not run `docker compose down -v` if you want to keep your local database or uploads.
- Do not use this reset procedure for production or any data you need to preserve.
- Do not delete repository files or run a system-wide volume cleanup; this reset only needs the Compose command above.

## Related reading

- [Event setup](../event-setup.md)
- [GitHub workflow](../event-github-workflow.md)
- [Troubleshooting](../event-troubleshooting.md)
