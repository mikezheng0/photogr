using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Photogr.Services.Migrations
{
    public partial class userwithphoto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Albums_AlbumID",
                table: "Photos");

            migrationBuilder.AlterColumn<int>(
                name: "AlbumID",
                table: "Photos",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<bool>(
                name: "Private",
                table: "Photos",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "UserID",
                table: "Photos",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Photos_UserID",
                table: "Photos",
                column: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Albums_AlbumID",
                table: "Photos",
                column: "AlbumID",
                principalTable: "Albums",
                principalColumn: "AlbumID",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Users_UserID",
                table: "Photos",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Albums_AlbumID",
                table: "Photos");

            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Users_UserID",
                table: "Photos");

            migrationBuilder.DropIndex(
                name: "IX_Photos_UserID",
                table: "Photos");

            migrationBuilder.DropColumn(
                name: "Private",
                table: "Photos");

            migrationBuilder.DropColumn(
                name: "UserID",
                table: "Photos");

            migrationBuilder.AlterColumn<int>(
                name: "AlbumID",
                table: "Photos",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Albums_AlbumID",
                table: "Photos",
                column: "AlbumID",
                principalTable: "Albums",
                principalColumn: "AlbumID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
