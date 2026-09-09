CREATE DATABASE EventMap;
GO

USE EventMap;
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

CREATE TABLE EntityGroups(
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

CREATE TABLE Entities(
    id                  BIGINT PRIMARY KEY IDENTITY(1,1),
    name                NVARCHAR(200) NOT NULL,
    boundary            NVARCHAR(MAX) NOT NULL,
    description         NVARCHAR(MAX) NOT NULL,
    entity_group_id     BIGINT NULL,
    project_id          BIGINT NULL,

    created_at          DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    updated_at          DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    deleted_at          DATETIME2 NULL
);
GO

CREATE TABLE EventsImpacts(
    id                  BIGINT PRIMARY KEY IDENTITY(1,1),
    event_id            BIGINT NOT NULL,
    entity_group_id     BIGINT NULL,
    entity_id           BIGINT NULL,

    created_at          DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    updated_at          DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    deleted_at          DATETIME2 NULL,

    CONSTRAINT chk_eventsimpacts_has_target CHECK (entity_group_id IS NOT NULL OR entity_id IS NOT NULL)
);
GO

ALTER TABLE Projects
ADD CONSTRAINT fk_projects_maps FOREIGN KEY (map_id) REFERENCES Maps(id);

ALTER TABLE Projects
ADD CONSTRAINT fk_projects_accounts FOREIGN KEY (account_id) REFERENCES Accounts(id);

ALTER TABLE Events
ADD CONSTRAINT fk_events_projects FOREIGN KEY (project_id) REFERENCES Projects(id);

ALTER TABLE EntityGroups
ADD CONSTRAINT fk_entitygroups_projects FOREIGN KEY (project_id) REFERENCES Projects(id);

ALTER TABLE Entities
ADD CONSTRAINT fk_entities_entitygroups FOREIGN KEY (entity_group_id) REFERENCES EntityGroups(id);

ALTER TABLE Entities
ADD CONSTRAINT fk_entities_projects FOREIGN KEY (project_id) REFERENCES Projects(id);

ALTER TABLE EventsImpacts
ADD CONSTRAINT fk_eventsimpacts_events FOREIGN KEY (event_id) REFERENCES Events(id);

ALTER TABLE EventsImpacts
ADD CONSTRAINT fk_eventsimpacts_entitygroups FOREIGN KEY (entity_group_id) REFERENCES EntityGroups(id);

ALTER TABLE EventsImpacts
ADD CONSTRAINT fk_eventsimpacts_entities FOREIGN KEY (entity_id) REFERENCES Entities(id);
GO

CREATE INDEX idx_projects_map_id ON Projects(map_id);
CREATE INDEX idx_projects_account_id ON Projects(account_id);
CREATE INDEX idx_events_project_id ON Events(project_id);
CREATE INDEX idx_events_event_date ON Events(event_date);
CREATE INDEX idx_entitygroups_project_id ON EntityGroups(project_id);
CREATE INDEX idx_entities_entity_group_id ON Entities(entity_group_id);
CREATE INDEX idx_entities_project_id ON Entities(project_id);
CREATE INDEX idx_eventsimpacts_event_id ON EventsImpacts(event_id);
CREATE INDEX idx_eventsimpacts_entity_group_id ON EventsImpacts(entity_group_id);
CREATE INDEX idx_eventsimpacts_entity_id ON EventsImpacts(entity_id);
GO

CREATE UNIQUE INDEX uq_eventsimpacts_event_entity
    ON EventsImpacts(event_id, entity_id)
    WHERE entity_id IS NOT NULL;
GO