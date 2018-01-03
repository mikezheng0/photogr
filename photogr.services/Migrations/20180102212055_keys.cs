using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Photogr.Services.Migrations
{
    public partial class keys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Albums_Users_UserID",
                table: "Albums");

            migrationBuilder.DropForeignKey(
                name: "FK_Events_Users_UserID",
                table: "Events");

            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Albums_AlbumID",
                table: "Photos");

            migrationBuilder.AlterColumn<int>(
                name: "AlbumID",
                table: "Photos",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserID",
                table: "Events",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserID",
                table: "Albums",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Albums_Users_UserID",
                table: "Albums",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Users_UserID",
                table: "Events",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Albums_AlbumID",
                table: "Photos",
                column: "AlbumID",
                principalTable: "Albums",
                principalColumn: "AlbumID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Albums_Users_UserID",
                table: "Albums");

            migrationBuilder.DropForeignKey(
                name: "FK_Events_Users_UserID",
                table: "Events");

            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Albums_AlbumID",
                table: "Photos");

            migrationBuilder.AlterColumn<int>(
                name: "AlbumID",
                table: "Photos",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "UserID",
                table: "Events",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "UserID",
                table: "Albums",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Albums_Users_UserID",
                table: "Albums",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Users_UserID",
                table: "Events",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Albums_AlbumID",
                table: "Photos",
                column: "AlbumID",
                principalTable: "Albums",
                principalColumn: "AlbumID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
