IF OBJECT_ID('dbo.Note', 'U') IS NOT NULL
DROP TABLE dbo.Note
GO
CREATE TABLE dbo.Note
(
    Id UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
    BottleId UNIQUEIDENTIFIER NOT NULL,
    MemberId UNIQUEIDENTIFIER NOT NULL,
    Thoughts [NVARCHAR](2000) NULL,
    Rating [INT] NULL,
    Finish [INT] NULL,
    Fruity [INT] NULL,
    Vanilla [INT] NULL,
    Smokey [INT] NULL,
    Citrus [INT] NULL,
    Oily [INT] NULL,
    Peppery [INT] NULL,
    FOREIGN KEY (BottleId) REFERENCES Bottle(Id),
    FOREIGN KEY (MemberId) REFERENCES Member(Id)
);
GO
