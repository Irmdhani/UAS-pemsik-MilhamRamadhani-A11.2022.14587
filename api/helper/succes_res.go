package helper

import (
	"api/domain"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

func SuccessRes(ctx *fiber.Ctx, data interface{}) error {
	return ctx.Status(http.StatusOK).JSON(domain.WebResponse{
		Code:   http.StatusOK,
		Status: "OK",
		Data:   data,
	})
}
