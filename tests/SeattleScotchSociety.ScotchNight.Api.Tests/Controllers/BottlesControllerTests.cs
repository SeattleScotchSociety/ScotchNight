using SeattleScotchSociety.ScotchNight.Api.Data;
using System;
using NSubstitute;
using Xunit;
using SeattleScotchSociety.ScotchNight.Api.Controllers;
using System.Collections.Generic;
using SeattleScotchSociety.ScotchNight.Api.Models;
using Microsoft.AspNetCore.Mvc;
using FluentAssertions;
using System.Net;

namespace SeattleScotchSociety.ScotchNight.Api.Tests
{
    public class BottlesControllerTests
    {
        private IBottleStore _mockBottleStore;

        public BottlesControllerTests()
        {
            _mockBottleStore = Substitute.For<IBottleStore>();
        }

        private BottlesController CreateControllerWithMocks()
        {
            return new BottlesController(_mockBottleStore);
        }

        public class GetAllAsync : BottlesControllerTests
        {
            [Fact]
            public async void ReturnsAllBottles()
            {
                var expected = new List<Bottle>
                {
                    new Bottle()
                    {
                        Name = "TacoSauce"
                    }
                };

                _mockBottleStore.GetAllAsync().Returns(expected);

                var controller = CreateControllerWithMocks();

                var result = await controller.GetAllAsync() as ObjectResult;

                result.Should().NotBeNull();

                result.Should().Be(expected);
            }

            [Fact]
            public async void ReturnsNoBottlesIfNoneExist()
            {
                List<Bottle> expected = null;

                _mockBottleStore.GetAllAsync().Returns(expected);

                var controller = CreateControllerWithMocks();

                var result = await controller.GetAllAsync() as ObjectResult;

                result.Should().NotBeNull();

                result.Should().Be(expected);
            }
        }

        public class PostAsync : BottlesControllerTests
        {
            [Fact]
            public async void ReturnsAcceptedOnSuccess()
            {
                var bottle = new Bottle()
                {
                    Name = "TacoSauce"
                };

                var controller = CreateControllerWithMocks();

                var result = await controller.PostAsync(bottle) as StatusCodeResult;

                result.Should().NotBeNull();

                result.StatusCode.Should().Be((int)HttpStatusCode.Accepted);
            }
        }

        public class PutAsync : BottlesControllerTests
        {
            [Fact]
            public async void ReturnsAcceptedOnSuccess()
            {
                var bottle = new Bottle()
                {
                    Name = "TacoSauce"
                };

                var controller = CreateControllerWithMocks();

                var result = await controller.PutAsync(bottle) as StatusCodeResult;

                result.Should().NotBeNull();

                result.StatusCode.Should().Be((int)HttpStatusCode.Accepted);
            }

            [Fact]
            public async void Returns404ForInvalidBottle()
            {
                var bottle = new Bottle()
                {
                    Name = "TacoSauce"
                };

                var controller = CreateControllerWithMocks();

                var result = await controller.PutAsync(bottle) as StatusCodeResult;

                result.Should().NotBeNull();

                result.StatusCode.Should().Be((int)HttpStatusCode.NotFound);
            }
        }
    }
}
