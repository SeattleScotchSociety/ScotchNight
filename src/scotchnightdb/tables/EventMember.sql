IF OBJECT_ID('dbo.EventMember', 'U') IS NOT NULL
DROP TABLE dbo.EventMember
GO
CREATE TABLE dbo.EventMember
(
    EventId UNIQUEIDENTIFIER NOT NULL,
    MemberId UNIQUEIDENTIFIER NOT NULL,
    PRIMARY KEY (EventId, MemberId),
    FOREIGN KEY (EventId) REFERENCES Event(Id),
    FOREIGN KEY (MemberId) REFERENCES Member(Id)
);
GO