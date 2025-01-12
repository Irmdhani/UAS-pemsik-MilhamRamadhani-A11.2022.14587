package helper

import (
	"api/domain"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

func ErrBadRequest(ctx *fiber.Ctx, err error) error {
	return ctx.Status(http.StatusBadRequest).JSON(domain.WebResponse{
		Code:   http.StatusBadRequest,
		Status: "BAD REQUEST",
		Data: map[string]interface{}{
			"error": err.Error(),
		},
	})
}
