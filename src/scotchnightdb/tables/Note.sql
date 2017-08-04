IF OBJECT_ID('dbo.Note', 'U') IS NOT NULL
DROP TABLE dbo.Note
GO
CREATE TABLE dbo.Note
(
    BottleId UNIQUEIDENTIFIER NOT NULL,
    MemberId UNIQUEIDENTIFIER NOT NULL,
    Thoughts [NVARCHAR](2000) NULL,
    Rating [FLOAT] NULL,
    Finish [FLOAT] NULL,
    Fruity [FLOAT] NULL,
    Vanilla [FLOAT] NULL,
    Smokey [FLOAT] NULL,
    Citrus [FLOAT] NULL,
    Oily [FLOAT] NULL,
    Peppery [FLOAT] NULL,
    PRIMARY KEY (BottleId, MemberId),
    FOREIGN KEY (BottleId) REFERENCES Bottle(Id),
    FOREIGN KEY (MemberId) REFERENCES Member(Id)
);
GO
