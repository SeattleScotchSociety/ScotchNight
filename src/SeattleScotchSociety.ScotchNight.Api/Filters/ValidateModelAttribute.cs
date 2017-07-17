using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace SeattleScotchSociety.ScotchNight.Api.Filters
{
    public class ValidateModelAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext actionContext)
        {
            if (actionContext.ModelState.IsValid == false)
            {
                actionContext.HttpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                actionContext.Result = new ContentResult()
                {
                    Content = actionContext.ModelState.ToString()
                };
                return;
            }

            base.OnActionExecuting(actionContext);
        }
    }
}