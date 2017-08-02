IF OBJECT_ID('dbo.EventBottle', 'U') IS NOT NULL
DROP TABLE dbo.EventBottle
GO
CREATE TABLE dbo.EventBottle
(
    EventId UNIQUEIDENTIFIER NOT NULL,
    BottleId UNIQUEIDENTIFIER NOT NULL,
    PRIMARY KEY (EventId, BottleId),
    FOREIGN KEY (EventId) REFERENCES Event(Id),
    FOREIGN KEY (BottleId) REFERENCES Bottle(Id)
);
GO