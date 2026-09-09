CREATE DATABASE EventMap;
GO

USE EventMap;
GO

SET ANSI_NULLS ON;
GO

SET QUOTED_IDENTIFIER ON;
GO

CREATE TABLE Accounts(
    id              BIGINT PRIMARY KEY IDENTITY(1,1),
    name            NVARCHAR(200) NOT NULL,
    email           NVARCHAR(200) NOT NULL,
    password_hash   NVARCHAR(200) NOT NULL,

    created_at      DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    updated_at      DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    deleted_at      DATETIME2 NULL,

    CONSTRAINT uq_accounts_email UNIQUE (email)
);
GO

CREATE TABLE Maps(
    id              BIGINT PRIMARY KEY IDENTITY(1,1),
    name            NVARCHAR(200) NOT NULL,
    map_url         NVARCHAR(MAX) NOT NULL,

    created_at      DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    updated_at      DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    deleted_at      DATETIME2 NULL
);
GO

CREATE TABLE Projects(
    id              BIGINT PRIMARY KEY IDENTITY(1,1),
    name            NVARCHAR(200) NOT NULL,
    description     NVARCHAR(MAX) NOT NULL,
    map_id          BIGINT NOT NULL,
    account_id      BIGINT NOT NULL,

    created_at      DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    updated_at      DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    deleted_at      DATETIME2 NULL
);
GO

CREATE TABLE Events(
    id              BIGINT PRIMARY KEY IDENTITY(1,1),
    name            NVARCHAR(200) NOT NULL,
    event_date      DATE NOT NULL,
    description     NVARCHAR(MAX) NOT NULL,
    project_id      BIGINT NOT NULL,

    created_at      DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    updated_at      DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    deleted_at      DATETIME2 NULL
);
GO

CREATE TABLE ObjectGroups(
    id              BIGINT PRIMARY KEY IDENTITY(1,1),
    name            NVARCHAR(200) NOT NULL,
    color_hex       CHAR(7) NOT NULL,
    description     NVARCHAR(MAX) NOT NULL,
    project_id      BIGINT NULL,

    created_at      DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    updated_at      DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    deleted_at      DATETIME2 NULL
);
GO

CREATE TABLE Objects(
    id                  BIGINT PRIMARY KEY IDENTITY(1,1),
    name                NVARCHAR(200) NOT NULL,
    boundary            NVARCHAR(MAX) NOT NULL,
    description         NVARCHAR(MAX) NOT NULL,
    object_group_id     BIGINT NULL,
    project_id          BIGINT NULL,

    created_at          DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    updated_at          DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    deleted_at          DATETIME2 NULL
);
GO

CREATE TABLE EventsImpacts(
    id                  BIGINT PRIMARY KEY IDENTITY(1,1),
    event_id            BIGINT NOT NULL,
    object_group_id     BIGINT NULL,
    object_id           BIGINT NULL,

    created_at          DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    updated_at          DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    deleted_at          DATETIME2 NULL,

    CONSTRAINT chk_eventsimpacts_has_target CHECK (object_group_id IS NOT NULL OR object_id IS NOT NULL)
);
GO

ALTER TABLE Projects
ADD CONSTRAINT fk_projects_maps FOREIGN KEY (map_id) REFERENCES Maps(id);

ALTER TABLE Projects
ADD CONSTRAINT fk_projects_accounts FOREIGN KEY (account_id) REFERENCES Accounts(id);

ALTER TABLE Events
ADD CONSTRAINT fk_events_projects FOREIGN KEY (project_id) REFERENCES Projects(id);

ALTER TABLE ObjectGroups
ADD CONSTRAINT fk_objectgroups_projects FOREIGN KEY (project_id) REFERENCES Projects(id);

ALTER TABLE Objects
ADD CONSTRAINT fk_objects_objectgroups FOREIGN KEY (object_group_id) REFERENCES ObjectGroups(id);

ALTER TABLE Objects
ADD CONSTRAINT fk_objects_projects FOREIGN KEY (project_id) REFERENCES Projects(id);

ALTER TABLE EventsImpacts
ADD CONSTRAINT fk_eventsimpacts_events FOREIGN KEY (event_id) REFERENCES Events(id);

ALTER TABLE EventsImpacts
ADD CONSTRAINT fk_eventsimpacts_objectgroups FOREIGN KEY (object_group_id) REFERENCES ObjectGroups(id);

ALTER TABLE EventsImpacts
ADD CONSTRAINT fk_eventsimpacts_objects FOREIGN KEY (object_id) REFERENCES Objects(id);
GO

CREATE INDEX idx_projects_map_id ON Projects(map_id);
CREATE INDEX idx_projects_account_id ON Projects(account_id);
CREATE INDEX idx_events_project_id ON Events(project_id);
CREATE INDEX idx_events_event_date ON Events(event_date);
CREATE INDEX idx_objectgroups_project_id ON ObjectGroups(project_id);
CREATE INDEX idx_objects_object_group_id ON Objects(object_group_id);
CREATE INDEX idx_objects_project_id ON Objects(project_id);
CREATE INDEX idx_eventsimpacts_event_id ON EventsImpacts(event_id);
CREATE INDEX idx_eventsimpacts_object_group_id ON EventsImpacts(object_group_id);
CREATE INDEX idx_eventsimpacts_object_id ON EventsImpacts(object_id);
GO

CREATE UNIQUE INDEX uq_eventsimpacts_event_object
    ON EventsImpacts(event_id, object_id)
    WHERE object_id IS NOT NULL;
GO
